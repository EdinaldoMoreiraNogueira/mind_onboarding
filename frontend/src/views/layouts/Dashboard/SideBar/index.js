import React from "react";

import { Container, ContainerSide, Title, Menu } from "./styles";
import { useHistory } from "react-router-dom";
import { getNivel } from "../../../../service/auth";
import ButtonList from "../ButtonList";
import { routes } from "../../../../routes";

function Sidebar({ ativado }) {
  const history = useHistory();
  const nivel = getNivel();

  return (
    <Container>
      <ContainerSide>
        <Title>Mind Education</Title>
        <h3>NAVEGAÇÃO</h3>
        <Menu>
          {routes.protected.map(
            (route, index) =>
              route?.role?.find((elemento) => elemento === nivel) && (
                <ButtonList
                  isActive={ativado === route.title}
                  icon={route.icon}
                  title={route.title}
                  onClick={() => history.push(route.path)}
                />
              )
          )}
        </Menu>
      </ContainerSide>
    </Container>
  );
}

export default Sidebar;
