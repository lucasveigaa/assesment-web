import styled from 'styled-components';
import { boolean } from 'yup';

interface TypeContainer {
	showQuestion: boolean;
}

export const Container = styled.main<TypeContainer>`
	padding: 2rem;
	border: 1px solid #d7dbda;
	border-radius: 8px;
	color: ${props => props.theme['color-text']};
	flex: 1;
	background-color: #fff;

	.icon-dropdown {
		span {
			margin: 0;
			font-size: 1.2rem;
		}
		cursor: pointer;
		transform: ${props =>
			props.showQuestion ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'};
		transition: transform 0.5s ease-in-out;
		margin-left: auto;
	}

	.questionBody {
		max-height: ${props => (props.showQuestion ? '100vh' : '0px')};
		overflow: hidden;
		transition: max-height 0.5s ease-in-out;
	}

	h3 {
		font-size: 1rem;
		margin-bottom: 0rem;
		display: flex;
		gap: 0.3rem;
		cursor: pointer;
	}

	p {
		margin: 0;
	}
`;

interface TypeContainerInput {
	variant?: string;
	checked?: boolean;
	width: number;
	marginRight?: number;
	changeDisplay?: boolean;
}

export const ContainerInput = styled.div<TypeContainerInput>`
	display: ${props => (props.changeDisplay ? 'flex' : 'none')};
	align-items: center;
	font-size: 0.75rem;
	font-weight: 700;
	margin-bottom: 4px;
	margin-right: ${props => props.marginRight}%;
	margin-left: 4px;
	margin-top: 1rem;
	width: ${props => props.width}%;
	border: 1px solid #ccd1cf;
	border-radius: 8px;
	background: ${props => props.variant};
	color: ${props =>
		props.variant === '#E2002F' ? '#fff' : props.theme['color-text']};
	box-shadow: ${props =>
		props.variant !== '#fff' ? '-4px 4px 0px #202020' : '0'};

	@media (max-width: 768px) {
		width: ${props => (props.width === 100 ? props.width-1 : 4 * props.width)}%;
		height: 30px;
		font-size:1rem;
	}

	input {
		display: none;
	}

	label {
		padding: 0.5rem 0;
		width: 100%;
	}
	.styledInput {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 9px;
		height: 9px;
		padding: 0;
		margin: auto 0.5rem;
		border: ${props =>
			props.variant === '#E2002F' ? '1px solid #fff' : '1px solid black'};
		border-radius: 50%;

		.active {
			width: 4px;
			height: 4px;
			background-color: ${props =>
				props.variant === '#E2002F' ? '#fff' : 'black'};
			border-radius: 50%;
			display: ${props => (props.checked ? 'block' : 'none')};
		}
	}

	.checked-answers {
		display: flex;
		margin: 0;
		align-items: center;
		gap: 0.1rem;
		margin-left: 0.5rem;
		@media (max-width: 768px){
			font-size: 1rem;

		}
	}
`;

export const Content = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
