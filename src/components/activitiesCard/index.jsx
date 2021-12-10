import { useActivities } from "../../providers/activities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  DeleteButton,
  ActivityContainer,
  Title,
  ContainerScroll,
} from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { TextField, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";

const ActivitiesCard = () => {
  const { activity, deleteActivity, ActivityCard } = useActivities();

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

  const deleteAction = (data) => {
    deleteActivity(data);
  };

  const { addActivity } = useActivities();
  const onSubmit = (data) => {
    addActivity(data);
  };

  return (
    <>
      <header>
        <h2> Atividades </h2>
      </header>
      <Container>
        <ContainerScroll>
          <ActivityContainer>
            <div>
              <Title>Clube de Leitura na Starbucks</Title>
              <span>Grupo: Clube de Leitura</span>
            </div>
            <div>
              <span>26 de Novembro</span>
            </div>
            <DeleteButton>
              <FiTrash2 />
            </DeleteButton>
          </ActivityContainer>

          <ActivityContainer>
            <div>
              <Title>Clube de Leitura na Starbucks</Title>
              <span>Grupo: Clube de Leitura</span>
            </div>
            <div>
              <span>26 de Novembro</span>
            </div>
            <DeleteButton>
              <FiTrash2 />
            </DeleteButton>
          </ActivityContainer>

          <ActivityContainer>
            <div>
              <Title>Clube de Leitura na Starbucks</Title>
              <span>Grupo: Clube de Leitura</span>
            </div>
            <div>
              <span>26 de Novembro</span>
            </div>
            <DeleteButton>
              <FiTrash2 />
            </DeleteButton>
          </ActivityContainer>
          <ActivityContainer>
            <div>
              <Title>Clube de Leitura na Starbucks</Title>
              <span>Grupo: Clube de Leitura</span>
            </div>
            <div>
              <span>26 de Novembro</span>
            </div>
            <DeleteButton>
              <FiTrash2 />
            </DeleteButton>
          </ActivityContainer>
          <ActivityContainer>
            <div>
              <Title>Clube de Leitura na Starbucks</Title>
              <span>Grupo: Clube de Leitura</span>
            </div>
            <div>
              <span>26 de Novembro</span>
            </div>
            <DeleteButton>
              <FiTrash2 />
            </DeleteButton>
          </ActivityContainer>
        </ContainerScroll>
      </Container>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          ></TextField>
        </div>
        <div>
          {/* <TextField
                    {...register("realization_time")}
                    margin="normal"
                    variant="outlined"
                    label="realization_time"
                    size="small"
                    color="primary"
                    helperText={errors.realization_time?.message}
                    error={!!errors.realization_time?.message}
              ></TextField> */}

          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"
                {...register("realization_time")}
                onChange={onSubmit}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider> */}
          {/* <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker />
          </LocalizationProvider> */}
          <TextField
            id="datetime-local"
            label="Data e hora"
            type="datetime-local"
            // inputFormat="dd/MM/yyyy hh:mm a"
            // defaultValue="2017-05-24T10:30"
            defaultValue="20-11-2020T10:30"
            // views={["day", "month", "year"]}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            {...register("realization_time")}
          />
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
          ></TextField>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            marginTop: 4,
            padding: "7px 40px",
            backgroundColor: "#403CAA",
            "&:hover": {
              backgroundColor: "#2a2877",
            },
          }}
        >
          adicionar
        </Button>
      </form>
    </>
  );
};

export default ActivitiesCard;
