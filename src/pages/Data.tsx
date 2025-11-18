import { useGetUsersQuery } from "../components/features/users/usersApi";
import { userColumns } from "../components/features/users/usersColumns";
import Table from "../components/table/Table";

const Data = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();
  return (
    <div className="p-4">
      <Table
        columns={userColumns}
        data={users || []}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Data;
