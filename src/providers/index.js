import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { ActivitiesProvider } from './activities'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>
        <ActivitiesProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </ActivitiesProvider>
      </HabitsProvider>
    </UserProvider>
  );
};

export default Providers;
