import styled from "styled-components";
import themes from "@/components/Themes";

const FactBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  border-radius: 20px;
  justify-content: center;
`;
const ShortFact = styled.span`
  background-color: ${(props) => themes[props.theme].primaryButtonColor};
  color: ${(props) => props.color === "primary" ? themes[props.theme].primaryButtonTextColor : themes[props.theme].secondaryButtonTextColor};
  border-radius: 20px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function ShortFactsBox({ project, theme }) {
  return (
    <FactBox>
      <ShortFact theme= {theme} color = "primary">{project.time} hours</ShortFact>
      <ShortFact theme= {theme} color = "primary">{project.priceCategory}</ShortFact>
      <ShortFact theme= {theme} color = "primary">{project.category}</ShortFact>
      <ShortFact theme= {theme} color = "primary">{project.difficulty}</ShortFact>
    </FactBox>
  );
}
