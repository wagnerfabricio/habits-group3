import { DeleteButton, ActivityContainer, Title, Container } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useActivities } from "../../providers/activities";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ActivitiesForm from "../activitiesForm";

const ActivitiesCard = ({ activity, group }) => {
  const [open, setOpen] = useState(false);
  const { deleteActivity } = useActivities();


  const deleteAction = (id) => {
    deleteActivity(id);
  };

  return (
    <>
      <Container>

        <ActivityContainer onClick={() => setOpen(true)}>
          <Title>{activity.title}</Title>
          <span>{group.name}</span>
          <span>{activity.realization_time}</span>
        </ActivityContainer>

        <DeleteButton onClick={() => deleteAction(activity.id)}>
            <FiTrash2 />
        </DeleteButton>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ActivitiesForm activity={activity} group={group}/>
        </Modal> 
      </Container>

    </>
  );
};
export default ActivitiesCard;
