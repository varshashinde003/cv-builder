import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import Text from "../Text";
import "./style.css";
import { white } from "../../utils/colors";

const headerDisplayOrder = ["phone", "email"];

const Preview = () => {
  const content = useSelector((state) => state.resume.content);

  const {
    name,
    address,
    postcode,
    city,
    profileSummary,
    jobTitle,
    education,
    experience,
    technicalSkills,
    projects,
    achievements,
  } = content;

  let fullAddress = "";
  if (address) fullAddress += address + ", ";
  if (city) fullAddress += city + "-";
  if (postcode) fullAddress += postcode;
  // if (country) fullAddress += country;

  return (
    <Wrapper id="preview">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-2">
            {fullAddress && (
              <Text fontSize="12px" block>
                {fullAddress}
              </Text>
            )}
            {content.social.linkedIn && (
              <Text fontSize="12px" block>
                <a
                  className="link"
                  href={content.social.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Text>
            )}
          </div>
          <div className="col-md-4 pt-2">
            <Text align="center" block bold>
              {name}
            </Text>
            <Text fontSize="12px">{jobTitle}</Text>
          </div>
          <div className="col-md-4 pt-2">
            {headerDisplayOrder.map((item, index) => {
              if (content[item]) {
                return (
                  <Text align="right" fontSize="11px" key={index} block>
                    {content[item]}
                  </Text>
                );
              } else return "";
            })}
          </div>
          {profileSummary && (
            <div className="col-md-12 pt-3 text-justify">
              <Text>{profileSummary}</Text>
            </div>
          )}

          {experience.length > 0 && (
            <div className="col-md-12 pt-3 text-justify">
              <h5 className="section-title mb-0 mt-3">Work Experience</h5>
              <hr />
            </div>
          )}

          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-md-12 text-justify">
                <div className="row">
                  <div className="col-md-5 text-left exp-meta">
                    <Text fontSize="1rem" block bold>
                      {item.jobTitle}
                    </Text>
                  </div>
                  <div className="col-md-2 text-center exp-meta">
                    <Text align="center" fontSize="1rem" block bold>
                      {item.employer}
                    </Text>
                  </div>
                  <div className="col-md-5 text-right exp-meta">
                    <Text fontSize="1rem" align="right" block bold>
                      {moment(item.startDate).format("MMM YYYY")} -{" "}
                      {item.endDate
                        ? moment(item.endDate).format("MMM YYYY")
                        : "Present"}
                    </Text>
                  </div>
                </div>
                <div className="mt-2 description">
                  <Text
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}

          <div className="col-md-12 text-justify">
            {technicalSkills.length > 0 && (
              <div className="tech-skills">
                <h5 className="section-title mb-0 mt-3">Technical Skills</h5>
                <hr />
                <ul>
                  {technicalSkills.map((item, index) => (
                    <li key={index}>
                      <Text className="tech-title light-bold">
                        {item.skillCriteria}:
                      </Text>{" "}
                      <Text>{item.skills}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {education.length > 0 && (
              <div className="education">
                <h5 className="section-title mb-0 mt-4">
                  Education and Certifications
                </h5>
                <hr />
                <ul>
                  {education.map((item, index) => (
                    <li key={index}>
                      <Text className="light-bold">{item.degree}</Text>{" "}
                      <Text>{item.institution}</Text>
                      <Text className="d-inline-block light-bold float-right">
                        {moment(item.startDate).format("YYYY")} -{" "}
                        {item.endDate
                          ? moment(item.endDate).format("YYYY")
                          : "Present"}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {projects.length > 0 && (
              <div className="projects">
                <h5 className="section-title mb-0 mt-4">Projects</h5>
                <hr />

                <ul className="mt-2">
                  {projects.map((item, index) => (
                    <li key={index}>
                      <Text margin="0 0.5rem 0 0" className="mr_4px light-bold">
                        {item.projectName}:
                      </Text>

                      <Text
                        dangerouslySetInnerHTML={{
                          __html: item.projectDescription,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {achievements.length > 0 && (
              <>
                <h5 className="section-title mb-0 mt-4">Achievements</h5>
                <hr />
                {achievements.map((item, index) => (
                  <Text key={index}>{item.title}</Text>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.2rem;
  background: ${white};
  height: 92vh;
  overflow: auto;
`;

export default Preview;
