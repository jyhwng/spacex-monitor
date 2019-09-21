import * as React from "react";
import { LaunchInfo } from "../../types";
import styled from "styled-components";
import { Tag } from "../Tag";
import { TextEllipsis } from "../TextEllipsis";

interface Props {
  launch: LaunchInfo;
}

export const Launch: React.FC<Props> = ({ launch }) => {
  const { missionName, rocket, launchDateUnix, launchSuccess, links } = launch;
  return (
    <Section>
      {links.flickrImages.length > 0 && (
        <ImgWrapper>
          <Img src={links.flickrImages[0]} />
        </ImgWrapper>
      )}
      <Content hasImage={links.flickrImages.length > 0}>
        <ContentTop>
          <h3>
            {missionName}
            <span> {launchSuccess ? "✅" : launchSuccess === null ? "" : "❌"}</span>
          </h3>
          <Tag disabled>{rocket.rocketName}</Tag>
        </ContentTop>
        <div>📅 {new Date(launchDateUnix * 1000).toLocaleString()}</div>
        {launch.details && <TextEllipsis lines={3}>{launch.details}</TextEllipsis>}
      </Content>
    </Section>
  );
};

const Section = styled.section``;

const Img = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Content = styled.div<{ hasImage: boolean }>`
  padding: 24px;
  background-color: #eee;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  h3 {
    margin-top: 0;
  }
  ${({ hasImage }) =>
    !hasImage &&
    `
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  
  `}
`;

const ContentTop = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin: 0;
  }
  button {
    flex-shrink: 0;
    margin-left: 12px;
  }
`;

const ImgWrapper = styled.div``;
