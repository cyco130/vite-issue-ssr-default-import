import imported from "styled-components";

let styled = imported;

if (imported.default) {
	styled = imported.default;
	console.log("BEEP! imported.default has what we expect in imported!");
}

const RedDiv = styled.div`
	color: red;
`;

export function App() {
	return <RedDiv>Hello world</RedDiv>;
}
