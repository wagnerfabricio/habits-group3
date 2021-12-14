import Modal from "@mui/material/Modal";

import { Container, ContainerScroll, AddButton, Header } from "./styles";
import { useUserGroups } from "../../providers/userGroups";
import ActivitiesCard from "../ActivitiesCard";
import { useState } from "react";
import ActivitiesForm from "../activitiesForm";

const TestesActivity = () => {
  const [open, setOpen] = useState(false);
  const { userGroups } = useUserGroups();
  const isAddForm = true;

  return (
    <>
      <Header>
        <h2> Atividades </h2>
        <AddButton onClick={() => setOpen(true)}>+</AddButton>
      </Header>

      <Container>
        <ContainerScroll>
          {userGroups.map((group) => {
            return (
              <div div key={group.id}>
                {group.activities.map((activity, index) => (
                  <>
                    <ActivitiesCard
                      key={activity.id}
                      activity={activity}
                      group={group}
                    ></ActivitiesCard>
                  </>
                ))}
              </div>
            );
          })}

          <Modal open={open} onClose={() => setOpen(false)}>
            <ActivitiesForm
              isAddForm={isAddForm}
            />
          </Modal>
        </ContainerScroll>
      </Container>
    </>
  );
};

export default TestesActivity;
