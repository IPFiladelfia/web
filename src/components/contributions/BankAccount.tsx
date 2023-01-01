import Image from "next/image";
import { Copy } from "phosphor-react";
import { toast } from "react-toastify";
import { IBankAccount } from "../../types";
import { CopyField } from "../common/CopyField";

export const BankAccount: React.FC<IBankAccount> = ({
  url,
  title,
  agency,
  account,
}) => {
  return (
    <div className="flex items-center gap-5">
      <Image src={url} width={70} height={70} alt={title} />
      <div>
        <h3 className="m-0 font-semibold text-xl">{title}</h3>
        <p className="m-0">
          <CopyField toastMessage="Agência copiada com sucesso!" value={agency}>
            Ag. {agency}
          </CopyField>
        </p>
        <p className="m-0">
          <CopyField toastMessage="Conta copiada com sucesso!" value={account}>
            CC. {account}
          </CopyField>
        </p>
      </div>
    </div>
  );
};
