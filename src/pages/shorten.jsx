import React, { useState } from "react";
import {
  FormGroupContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  FormErrorMessage,
} from "../components/Form";
import styled from "styled-components";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import QRCode from "qrcode.react";

const ANON_SHORTEN_URL = `${process.env.REACT_APP_DOMAIN_NAME}/api/anon_shorten`;

const FormContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  width: 50%;
  margin: 1%;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ParentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ResponseContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  border: 3px solid darkslategray;
  border-radius: 8px;
  width: 70%;
  margin: 1%;
  color: white;
  display: inherit;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const UrlContainter = styled.div`
  box-sizing: border-box;
  width: 100%;
  // border: 3px solid mediumturquoise;
  margin: 3px;
  padding: 0;
`;

const ReadOnlyInput = styled.input`
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  color: white;
  margin: 8px 0px;
  padding: 10px;
  width: ${(props) => props.width || "100%"};
  border: 1px solid slategray;
  border-radius: 8px;
  background-color: inherit;
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: black;
  background-color: mediumturquoise;
  margin: 6px 0px;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  padding: 12px 50px;
`;

const H2 = styled.h2`
  margin: 0;
  padding-bottom: 3%;
  // margin-left: 6%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  overflow-wrap: break-word;
`;

const QRContainer = styled.div`
  width: 100%;
`;

// const ShareContainer = styled.div`
//   width: 100%;
//   text-align: left;
// `

const schema = yup.object().shape({
  url: yup
    .string()
    .url("Please enter a valid URL (with http:// or https://)")
    .required("Required"),
  slug: yup.string(),
});

const Shorten = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [url, setUrl] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${url}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    toast.success("Downloaded!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      pauseOnFocusLoss: false,
      draggable: false,
      progress: undefined,
    });
  };

  const onSubmit = async (data) => {
    if (data.slug === "") {
      try {
        console.log(ANON_SHORTEN_URL);
        const res = await axios.post(ANON_SHORTEN_URL, { url: data.url });
        setUrl("https://skipto.site/" + res.data.slug);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
        });
      }
    } else {
      try {
        const res = await axios.post(ANON_SHORTEN_URL, data);
        setUrl("https://skipto.site/" + res.data.slug);
        console.log(url);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <Header />
      <ParentContainer>
        <FormContainer id="shorten">
          <FormGroupContainer>
            <FormGroup onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>Long URL</FormLabel>
              <FormInput
                placeholder="Long URL"
                required
                name="url"
                ref={register}
              ></FormInput>
              <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
              <FormLabel>Slug</FormLabel>
              <FormInput
                placeholder="Optinal Back Half"
                width="40%"
                name="slug"
                ref={register}
              ></FormInput>
              <FormButton type="submit">Shorten</FormButton>
            </FormGroup>
          </FormGroupContainer>
        </FormContainer>
        {url && (
          <ResponseContainer>
            <UrlContainter>
              <H2>Your shortened link is...</H2>
              <ReadOnlyInput value={url} readOnly></ReadOnlyInput>
              <Button>Copy</Button>
            </UrlContainter>
            <UrlContainter>
              <H2>QR Code</H2>
              <QRContainer>
                <QRCode
                  id="qrcode"
                  value={url}
                  size={256}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={true}
                  renderAs={"canvas"}
                />
              </QRContainer>
              <Button onClick={downloadQR}>Download</Button>
            </UrlContainter>
          </ResponseContainer>
        )}
      </ParentContainer>
    </>
  );
};

export default Shorten;
