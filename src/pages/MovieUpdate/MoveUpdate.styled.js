import styled from "styled-components";

export const UpdateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 4.8rem 2.4rem;
  background: linear-gradient(to bottom, #e9ecef 10%, #343a40);
`;

export const UpdateCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2.4rem;
  border-radius: 1.2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  background: #fff;

  @media (max-width: 1450px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.darkBgColor};
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(p) => p.theme.colors.btnBgColor};
  font-size: 1.6rem;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(p) => p.theme.colors.btnBgColor};
  font-size: 1.6rem;
  min-height: 10rem;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  background-color: ${(p) => p.theme.colors.btnBgColor};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverColor};
  }
`;
