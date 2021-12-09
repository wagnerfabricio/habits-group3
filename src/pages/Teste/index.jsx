import { useState } from "react";
import { useGroups } from "../../providers/groups";

const Teste = () => {
    const [search, setSearch] = useState("")
  const { groups, changeGroupPage, searchGroup, searchGroupByCategory } = useGroups();

  const showGroupsList = groups.results ? (
    groups.results.map((group) => <p key={group.id}>{JSON.stringify(group)}</p>)
  ) : (
    <p>Carregando grupos...</p>
  );

  return (
    <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => searchGroupByCategory(search)}>Pesquisar</button>
      <button onClick={() => (changeGroupPage(1))}>Próxima página</button>
      <button onClick={() => changeGroupPage(-1)}>Página anterior</button>
      {showGroupsList}
    </div>
  );
};

export default Teste;
