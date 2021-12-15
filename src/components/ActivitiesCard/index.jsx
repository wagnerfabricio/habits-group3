import { DeleteButton, ActivityContainer, Title, Container, ButtonCard } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useActivities } from "../../providers/activities";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ActivitiesForm from "../activitiesForm";
import { Box } from "@mui/material";

const ActivitiesCard = ({ activity, group }) => {
  const [open, setOpen] = useState(false);
  const { deleteActivity } = useActivities();


  const deleteAction = (id) => {
    deleteActivity(id);
  };

  return (
    <>
      <Container>

        <ActivityContainer >
          <ButtonCard onClick={() => setOpen(true)}>
            <Title>{activity.title}</Title>
            <span>{group.name}</span>
            <span>{activity.realization_time}</span>
          </ButtonCard>
            <DeleteButton onClick={() => deleteAction(activity.id)}>
              <FiTrash2 />
            </DeleteButton>
        </ActivityContainer>

        

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box>
            <ActivitiesForm activity={activity} group={group} setOpen={setOpen}/> 
          </Box>
        </Modal> 
      </Container>

    </>
  );
};
export default ActivitiesCard;
