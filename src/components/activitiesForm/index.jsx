import { Button, Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useActivities } from "../../providers/activities";
import { Container, CloseModal, Wrapper } from "./styles";
import { FiXCircle } from "react-icons/fi";

const ActivitiesForm = ({ isAddForm, activity, group, setOpen }) => {

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Senha obrigatório"),
    group: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 
  const { addActivity } = useActivities();

  const onSubmit = (data) => {
    addActivity(data);
  };


  const { updateActivity } = useActivities();

  const onSubmitEdit = (data) => {
    const newData = { ...data, group: group.id };
    updateActivity(activity.id, newData);
  };

  return (
    <Wrapper>
      {isAddForm ? (
        <>
        <Container>
          <CloseModal>
              <FiXCircle />
          </CloseModal>
        <Box
          component="form"
          onSubmit={handleSubmit(isAddForm ? onSubmit : onSubmitEdit)}
          >
         
          <h2>Criar Evento</h2>

            <div>
              <TextField
                // className='teste'
                {...register("title")}
                margin="normal"
                variant="outlined"
                label="Titulo"
                size="small"
                color="primary"
                helperText={errors.title?.message}
                error={!!errors.title?.message}
                sx={{ mt: 2, background: "#F5F5F5" }}
              ></TextField>
            </div>
            
            <div>
              <TextField
                {...register("group")}
                margin="normal"
                variant="outlined"
                label="Grupo"
                size="small"
                color="primary"
                helperText={errors.group?.message}
                error={!!errors.group?.message}
                className="input-login"
                value={group.id}
              ></TextField>
            </div>

            <div>
              <TextField
                id="datetime-local"
                label="Data e hora"
                type="datetime-local"
                format="dd-MM-yyyy"
                defaultValue="2021-12-24T10:30"
                sx={{ mt: '20px', width: '220px'}}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("realization_time")}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: 4,
                padding: "7px 40px",
                backgroundColor: "#FF0000",
                "&:hover": {
                  backgroundColor: "#FF0000",
                },
              }}
            >
              adicionar
            </Button>
            </Box>
          </Container>
        </>
      ) : (
        <Box component="form" onSubmit={handleSubmit(onSubmitEdit)}>
          <Container
          >
            <CloseModal onClick={() => setOpen(false)}>
              <FiXCircle />
            </CloseModal>
            <h2>Atualizar Evento</h2>

            <div>
              <TextField
                {...register("title")}
                margin="normal"
                variant="outlined"
                label="Titulo"
                size="small"
                color="primary"
                helperText={errors.title?.message}
                error={!!errors.title?.message}
                sx={{ mt: 2, background: "#F5F5F5" }}
                defaultValue={activity.title}
              ></TextField>
            </div>

            <div>
              <TextField
                {...register("group")}
                margin="normal"
                variant="outlined"
                label="Grupo"
                size="small"
                color="primary"
                helperText={errors.group?.message}
                error={!!errors.group?.message}
                className="input-login"
                value={group.name}
              ></TextField>
            </div>
            <p></p>
            <div>
              <TextField
                id="datetime-local"
                label="Data e hora"
                type="datetime-local"
                format="dd-MM-yyyy"
                defaultValue="2021-05-24T10:30"
                sx={{ width: '220px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("realization_time")}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: 4,
                padding: "7px 40px",
                backgroundColor: "#FF0000",
                "&:hover": {
                  backgroundColor: "#c70303",
                },
              }}
            >
              atualizar
            </Button>
          </Container>
        </Box>
      )}
    </Wrapper>
  );
};

export default ActivitiesForm;
