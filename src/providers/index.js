import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { ActivitiesProvider } from './activities'
import { UserGroupsProvider } from "./userGroups";
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <ActivitiesProvider>
          <UserGroupsProvider>
            <GroupsProvider>{children}</GroupsProvider>
          </UserGroupsProvider>
        </ActivitiesProvider>
      </HabitsProvider>
    </UserProvider>
  );
};

export default Providers;
