import { gql, useQuery } from "@apollo/client";
import { PageHeader } from "../components/common/PageHeader";
import { PageTitle } from "../components/common/PageTitle";
import apolloClient from "../../apollo-client";
import { GET_TEAM_MEMBERS_BY_TYPE } from "../queries/queries";
import { teamMemberTitles } from "../utils/TeamMemberTitles";
import React from "react";
import Image from "next/image";
import { TeamMember } from "../components/ourTeam/TeamMember";

export enum TeamMemberTypeEnum {
  PASTOR = "pastor",
  PRESBITERY = "presbitery",
  DEACON = "deacon",
  EVANGELIST = "evangelist",
  MISSIONARY = "missionary",
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  type: TeamMemberTypeEnum;
  picture?: string | null;
}

interface QuemSomosProps {
  teamMembersPerType: {
    type: TeamMemberTypeEnum;
    teamMembers: TeamMember[];
  }[];
}

const QuemSomos = ({ teamMembersPerType }: QuemSomosProps) => {
  return (
    <>
      <PageHeader title="Nossa equipe" />
      <div className="container mx-auto py-12">
        {teamMembersPerType.map((memberType) => (
          <React.Fragment key={memberType.type}>
            <>
              <PageTitle title={teamMemberTitles[memberType.type]} />

              <div className="md:flex md:justify-center md:flex-wrap md:gap-4">
                {memberType.teamMembers.map((member) => (
                  <TeamMember
                    key={member.id}
                    name={member.name}
                    title={member.title}
                    profilePictureSrc={member.picture ?? null}
                  />
                ))}
              </div>
            </>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default QuemSomos;

export async function getServerSideProps() {
  const types = ["pastor", "missionary"];
  const promises: any = [];

  types.map((type) => {
    promises.push(
      apolloClient.query({
        query: GET_TEAM_MEMBERS_BY_TYPE,
        variables: {
          type,
        },
      })
    );
  });

  const responses = await Promise.all([...promises]);

  const teamMembersPerType = responses.map((response) => {
    const { data } = response;

    return {
      type: data.findTeamMembersByType[0].type,
      teamMembers: data.findTeamMembersByType,
    };
  });

  return {
    props: {
      teamMembersPerType,
    },
  };
}
