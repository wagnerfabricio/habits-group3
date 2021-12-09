import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { UserGroupsProvider } from "./userGroups";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <UserGroupsProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </UserGroupsProvider>
      </HabitsProvider>
    </UserProvider>
  );
};

export default Providers;
