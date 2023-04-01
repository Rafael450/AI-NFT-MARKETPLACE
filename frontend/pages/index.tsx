import Head from "next/head";
import { Button, Icon, TextField } from "@taikai/rocket-kit";
import { useWeb3 } from "../hooks/useWeb3";
import { Container, Main, NavBar, BrandName, Menu, Footer, Title, SubTitle, Content } from "../styles/home";
import ConnectModal from "../components/connect-wallet-modal";
import React, { useState } from 'react';
import ClickableEthAddress from "../components/clickable-eth-address";
import NftSlider from "@/components/nft-slider";
import LogoBranca from "../imgs/GenIALogoBranca.png"
import LogoPreta from "../imgs/GenIALogoPreta.png"
import genia1 from "../imgs/genIA1.webp"
import genia2 from "../imgs/genIA2.webp"
import genia3 from "../imgs/genIA3.png"

export default function Home() {

  const { connected } = useWeb3();
  const [isConnectModal, setConnectModal] = useState(false);
  return (
    <Container>
      <Head>
        <title>AI NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        style={{
          color: "#FFF",
          display: "flex",
          background: "white"
        }}>
        {/* <BrandName>AI NFT Marketplace</BrandName> */}
        {connected &&
          <Button
            ariaLabel="Connect"
            className="button"
            color="white"
            txtColor="black"
            value="My Collection"
            variant="solid"
            action={() => setConnectModal(true)}
            style={{
              margin: "2px"
            }}
          />
        }
        {connected && <Button
          ariaLabel="BuyTokens"
          className="button"
          value="Buy GenIA"
          color="white"
          txtColor="black"
          variant="solid"
          action={() => setConnectModal(true)}
          style={{
            margin: "2px"
          }}
        />}
        <Menu>
          {!connected && (
            <Button
              ariaLabel="Connect"
              className="button"
              color="white"
              txtColor="black"
              value="Connect your wallet"
              variant="solid"
              action={() => setConnectModal(true)}
              style={{
                margin: "2px"
              }}
            />
          )}
          {connected && <ClickableEthAddress onClick={() => setConnectModal(true)} />}
        </Menu>
      </NavBar>
      {isConnectModal && <ConnectModal onClose={() => setConnectModal(false)} />}
      <Main>
        <Container
          style={{
            display: "flex",
            alignItems: "flex-start",
            height: "100px",
            marginBottom: "40px"
          }}
        >
          <img src={LogoBranca.src} alt="logo" style={{ height: "100px" }} />
        </Container>
        {!connected && <Container
          style={{
            height: "55%",
            width: "95%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Container
            style={{ width: "40%", textAlign: "left" }}
          >
            <Title style={{ fontWeight: "500", fontSize: "2.5rem", marginBottom: "50px" }}>
              Mint your own NFT using AI to fuel your imagination.
              You can purchase our tokens tax-free and earn more by selling your art.
            </Title>
            <Title style={{ fontWeight: "500", fontSize: "2.5rem" }}>
              Each GenIA token can generate up to 4 images, which can be minted as
              NFTs and sold at our Marketplace. Let your imagination run wild!
            </Title>
            <Container
              style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}
            >
              <Button
                ariaLabel="Connect"
                className="button"
                color="red400"
                rounded
                txtColor="oracle100"
                value="Try GenIA"
                variant="solid"
                action={() => setConnectModal(true)}
                style={{
                  marginTop: "20px",
                  height: "70px",
                  width: "140px",
                  fontSize: "10rem"
                }}
              />
              <Container style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                fontSize: "2.5rem",
                height: "70px",
                alignItems: "center",
                lineHeight: "70px"
              }}>
                Follow us
                <Icon style={{ height: "50px", marginLeft: "20px" }} icon="instagram-n" fill="#fff" />
                <Icon style={{ height: "50px" }} icon="twitter-n" fill="#fff" />
              </Container>
            </Container>
          </Container>
          <Container
            style={{ 
              width: "50%",
              marginLeft: "10%",
              height: "600px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Container
              style={{
                height: "33%",
                width: "50%",
                position: "relative"
              }}
            >
              <img src={genia1.src} alt="genia1" style={{height:"400px", width: "400px", position: "absolute", bottom: "-130px"}}></img>
            </Container>
            <Container
              style={{
                height: "33%",
                width: "100%",
                alignItems: "flex-end"
              }}
            >
              <img src={genia2.src} alt="genia2" style={{height:"350px", width: "350px"}}></img>
            </Container>
            <Container
              style={{
                height: "33%",
                width: "100%",
                position: "relative"
              }}
            >
              <img src={genia3.src} alt="genia3" style={{height:"350px", width: "350px", position: "absolute", bottom: "0"}}></img>
            </Container>
          </Container>
        </Container>}
        {connected && <Content
          style={{
            height: "55%",
            justifyContent: "flex-start",
            paddingTop: "100px"
          }}
        >
          <Title
            style={{ fontWeight: "600" }}
          >Give wings to your horses!</Title>
          <Title
            style={{ marginBottom: "20px", fontWeight: "600" }}
          >Be bold. Be wild. Be GenIA.</Title>
          <TextField
            name="generate-prompt"
            onChange={function noRefCheck() { }}
            placeholder="Generate Image w/ Prompt"
            type="text"
            style={{
              background: "white",
              width: "800px",
              height: "50px",
              color: "#41424c",
              textAlign: "center",
              borderRadius: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif"
            }}
            max={10}
          />
          <Button
            ariaLabel="generate"
            className="button"

            value="Generate"
            color="red400"
            txtColor="oracle100"
            rounded
            variant="solid"
            action={() => setConnectModal(true)}
            style={{
              marginTop: "20px",
              height: "70px",
              width: "140px",
              fontSize: "10rem"
            }}
          />
        </Content>}
        <NftSlider />
      </Main>
    </Container>
  );
}
