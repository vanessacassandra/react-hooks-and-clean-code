import styled from "styled-components";

const StyledOrderReport = styled.div`
  border-bottom: solid 1px black;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const OrderReport = ({ customer: { name, address, total } }) => {
  return (
    <StyledOrderReport>
      <p>{name}</p>
      <span>{address}</span>
      <span>Orders: {total}</span>
    </StyledOrderReport>
  );
};

export default OrderReport;
