import styled from "@emotion/styled";

export const StyledHeader = styled.header({
  height: 80,
  width: "100%",
  margin: 0,
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  zIndex: 1000000,

  a: {
    color: "#fff",

    display: "flex",
    alignItems: "center",
    gap: 15,
    marginLeft: 20,
  },

  p: {
    fontSize: 32,
    fontWeight: "bold",
  },
  nav: {
    marginRight: 20,
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    gap: 25,
    fontSize: 25,
    li: {
      a: {
        fontWeight: 500,
        color: "#fff",
      },
    },
  },
});
