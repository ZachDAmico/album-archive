import { getRecordUsers } from "../../services/userFetchService";

//need props
//how do i get the recordUser info here? - useState? map? do i need more than 1 user?
export const User = () => {
  return (
    <div className="user">
      <div>
        <div>{recordUser.name}</div>
      </div>
    </div>
  );
};
