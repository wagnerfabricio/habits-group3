import { ButtonAdd } from "../../components/ButtonAdd";
import { Modal, Box, IconButton, Tooltip } from "@mui/material";
import AddGroupModal from "../../components/Modal/addGroup";
import { useEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  PageControl,
  ListBox,
  UserGroupList,
  Main,
} from "./styles";
import { ImSearch } from "react-icons/im";
import { useUserGroups } from "../../providers/userGroups";
import GroupCard from "../../components/GroupCard";
import { useGroups } from "../../providers/groups";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Groups = () => {
  // const [searchUserGroup, setSearchUserGroup] = useState("");
  const [inputSearchGroup, setInputSearchGroup] = useState("");
  const [useFilterGroups, setUseFilterGroups] = useState(false);

  const { userGroups } = useUserGroups();

  const groupsTitle = useRef();
  const scrollToTopGroups = () => {
    groupsTitle.current.scrollIntoView({ behavior: "smooth" });
    document.getElementById("groupList").scroll({ top: 0, behavior: "smooth" });
  };

  const userGroupsTitle = useRef();

  const scrollToTopUserGroups = () => {
    userGroupsTitle.current.scrollIntoView({ behavior: "smooth" });
    document
      .getElementById("userGroupsList")
      .scroll({ top: 0, behavior: "smooth" });
  };

  const filterUserGroups =
    useFilterGroups &&
    userGroups.filter((group) =>
      group.name.toLowerCase().includes(inputSearchGroup.toLowerCase())
    );

  const showUserGroups = useFilterGroups
    ? filterUserGroups.map((group) => (
        <GroupCard group={group} key={group.id} userGroups={true} />
      ))
    : userGroups.map((group) => (
        <GroupCard group={group} key={group.id} userGroups={true} />
      ));

  const { groups, changeGroupPage, searchGroup } = useGroups();
  const showGroups =
    groups.results &&
    groups.results.map((group) => (
      <GroupCard group={group} key={group.id} disable={true} />
    ));

  const handleSearch = () => {
    setUseFilterGroups(true);
    searchGroup(inputSearchGroup);
  };

  //Crete Group Modal
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const handleOpenAddGroupModal = () => setOpenAddGroup(true);
  const handleCloseAddGroupModal = () => setOpenAddGroup(false);

  useEffect(() => {
    inputSearchGroup.length < 1 && setUseFilterGroups(false);
  }, [userGroups, inputSearchGroup.length]);

  return (
    <Container>
      <Main>
        <header>
          <h1
            onClick={() => {
              searchGroup("");
              setUseFilterGroups(false);
              setInputSearchGroup("");
            }}
          >
            Grupos
          </h1>
          <input
            type="text"
            placeholder="Pesquisar Grupo"
            value={inputSearchGroup}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              setInputSearchGroup(e.target.value);
              // setSearchUserGroup(e.target.value);
            }}
          />
          <button onClick={handleSearch}>
            <ImSearch />
          </button>
          <ButtonAdd onClick={handleOpenAddGroupModal} />
        </header>
        <hr />
        <Content>
          <ListBox ref={userGroupsTitle} id="userGroupsList">
            <header>
              <h3>Seus Grupos</h3>
            </header>
            <UserGroupList>
              {filterUserGroups.length === 0 ? (
                <h3>Você não possui grupos com essa descrição</h3>
              ) : (
                showUserGroups
              )}
              <PageControl>
                <Tooltip title="Voltar para o topo" arrow>
                  <IconButton
                    onClick={() => {
                      scrollToTopUserGroups();
                    }}
                  >
                    <BsArrowRightCircle
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </IconButton>
                </Tooltip>
              </PageControl>
            </UserGroupList>
          </ListBox>
          <ListBox className="groups" ref={groupsTitle} id="groupList">
            <header>
              <h3>Grupos indicados:</h3>
            </header>
            <UserGroupList>
              {filterUserGroups.length === 0 ? (
                <h3>Não foi encontrado nenhum grupo com essa descrição</h3>
              ) : (
                showGroups
              )}
              <PageControl>
                <Tooltip title="Página Anterior" arrow>
                  <IconButton
                    onClick={() => {
                      changeGroupPage(-1);
                      scrollToTopGroups();
                    }}
                  >
                    <BsArrowLeftCircle />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Próxima página" arrow>
                  <IconButton
                    onClick={() => {
                      changeGroupPage(1);
                      scrollToTopGroups();
                    }}
                  >
                    <BsArrowRightCircle />
                  </IconButton>
                </Tooltip>
              </PageControl>
            </UserGroupList>
          </ListBox>
        </Content>
      </Main>

      <Modal open={openAddGroup} onClose={handleOpenAddGroupModal}>
        <Box>
          <AddGroupModal handleCloseAddGroupModal={handleCloseAddGroupModal} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Groups;
