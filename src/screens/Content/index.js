import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import loadable from "@loadable/component";
import { updateDetails } from "../../redux/actions/resume";
import {
  basicInfoOrder,
  educationFields,
  personalInfoOrder,
  socialOrder,
  experienceFields,
  technicalSkillsOrder,
  projectsListOrder,
  achievementsList,
} from "./metadata";
import { white, secondaryLight } from "../../utils/colors";
import { downloadPdfDocument } from "../../utils/helpers";

const FlexBox = loadable(() => import("../../components/styled/FlexBox"));
const Text = loadable(() => import("../../components/Text"));
const Card = loadable(() => import("../../components/Card"));
const Input = loadable(() => import("../../components/Input"));
const Button = loadable(() => import("../../components/styled/Button"));
const InputWrapper = loadable(() => import("../../components/InputWrapper"));

const Content = () => {
  const dispatch = useDispatch();
  const { content, resumeName } = useSelector((state) => state.resume);

  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [technicalSkills, setTechnicalSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [achievements, setAchievements] = useState({});

  const handleChange = (event, object) => {
    if (object === "social")
      dispatch(
        updateDetails({
          social: {
            ...content.social,
            [event.target.name]: event.target.value,
          },
        })
      );
    else if (object === "education")
      setEducation({
        ...education,
        [event.target.name]: event.target.value,
      });
    else if (object === "experience")
      setExperience({
        ...experience,
        [event.target.name]: event.target.value,
      });
    else if (object === "technicalSkills")
      setTechnicalSkills({
        ...technicalSkills,
        [event.target.name]: event.target.value,
      });
    else if (object === "projects")
      setProjects({
        ...projects,
        [event.target.name]: event.target.value,
      });
    else if (object === "achievements")
      setAchievements({
        ...achievements,
        [event.target.name]: event.target.value,
      });
    dispatch(
      updateDetails({
        [event.target.name]: event.target.value,
      })
    );
  };

  const addEducation = () => {
    dispatch(
      updateDetails({
        education: [...content.education, education],
      })
    );
  };

  const addExperience = () => {
    dispatch(
      updateDetails({
        experience: [...content.experience, experience],
      })
    );
  };

  const addTechnicalSkills = () => {
    dispatch(
      updateDetails({
        technicalSkills: [...content.technicalSkills, technicalSkills],
      })
    );
  };

  const addProjects = () => {
    dispatch(
      updateDetails({
        projects: [...content.projects, projects],
      })
    );
  };

  const addAchievements = () => {
    dispatch(
      updateDetails({
        achievements: [...content.achievements, achievements],
      })
    );
  };

  return (
    <Wrapper>
      <Title>
        <Card>
          <FlexBox justifyContent="space-between" alignItems="center">
            <ResumeName>
              {isEditing ? (
                <FlexBox justifyContent="flex-start" alignItems="center">
                  <Input
                    type="text"
                    name="resumeName"
                    value={resumeName}
                    onChange={handleChange}
                    margin="0 0 0 0"
                  />
                  <ButtonCheck
                    type="button"
                    onClick={() => setIsEditing(false)}
                  >
                    <i className="fa fa-check" />
                  </ButtonCheck>
                </FlexBox>
              ) : (
                <Text fontSize="16px" block bold>
                  {resumeName}
                  <i
                    className="fa fa-edit ml_16px gray cursor-pointer"
                    onClick={() => setIsEditing(true)}
                  />
                </Text>
              )}
            </ResumeName>
            <Button onClick={() => downloadPdfDocument("preview")}>
              Download <i className="fa fa-download ml_8px" />
            </Button>
          </FlexBox>
        </Card>
      </Title>
      <Spacing marginTop="7rem" />
      <Card>
        <Heading>Basic Information</Heading>
        <FlexBox wrap="wrap" columnGap="2rem">
          {basicInfoOrder.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content}
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
      </Card>
      <Spacing />
      <Card>
        <Heading>Personal Information</Heading>
        <Text textTransform="capitalize" block>
          Profile Summary
        </Text>
        <TextArea
          name="profileSummary"
          defaultValue={content.profileSummary}
          onChange={handleChange}
          rows="6"
        ></TextArea>
        <FlexBox wrap="wrap" columnGap="2rem">
          {personalInfoOrder.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content}
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
      </Card>
      <Spacing />
      <Card>
        <Heading>Social Information</Heading>
        <FlexBox wrap="wrap" columnGap="2rem">
          {socialOrder.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.social}
              object="social"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
      </Card>
      <Spacing />
      <Card>
        <Heading>Education</Heading>
        <Table>
          <thead>
            <tr>
              {educationFields.map((item, index) => (
                <th key={index}>
                  <Text>{item.title}</Text>
                </th>
              ))}
              <th>
                <Text>Action</Text>
              </th>
            </tr>
          </thead>
          {content.education.length > 0 ? (
            content.education.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.degree}</td>
                  <td>{item.institution}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <Text margin="0.5rem 0" align="center" block>
              No Data!
            </Text>
          )}
        </Table>
        <Text margin="0 0 1rem" fontSize="1rem" block bold>
          Add More
        </Text>
        <FlexBox wrap="wrap" columnGap="2rem">
          {educationFields.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.education}
              object="education"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
        <Center>
          <Button onClick={addEducation}>Add</Button>
        </Center>
      </Card>
      <Spacing />
      <Card>
        <Heading>Experience</Heading>
        <Table>
          <thead>
            <tr>
              <th>
                <Text>Employer</Text>
              </th>
              <th>
                <Text>Job Title</Text>
              </th>
              <th>
                <Text>Start Date</Text>
              </th>
              <th>
                <Text>End Date</Text>
              </th>
              <th>
                <Text>Action</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.experience.length > 0 ? (
              content.experience.map((item, index) => (
                <tr key={index}>
                  <td>{item.jobTitle}</td>
                  <td>{item.employer}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                </tr>
              ))
            ) : (
              <Text margin="0.5rem 0" align="center" block>
                No Data!
              </Text>
            )}
          </tbody>
        </Table>
        <Text margin="0 0 1rem" fontSize="1rem" block bold>
          Add More
        </Text>
        <FlexBox wrap="wrap" columnGap="2rem">
          {experienceFields.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.experience}
              object="experience"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
        <Center>
          <Button onClick={addExperience}>Add</Button>
        </Center>
      </Card>
      <Spacing />
      <Card>
        <Heading>Technical Skills</Heading>
        <Table>
          <thead>
            <tr>
              <th>
                <Text>Skill Criteria</Text>
              </th>
              <th>
                <Text>Skills</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.technicalSkills.length > 0 ? (
              content.technicalSkills.map((item, index) => (
                <tr key={index}>
                  <td>{item.skillCriteria}</td>
                  <td>{item.skills}</td>
                </tr>
              ))
            ) : (
              <Text margin="0.5rem 0" align="center" block>
                No Data!
              </Text>
            )}
          </tbody>
        </Table>
        <Text margin="0 0 1rem" fontSize="1rem" block bold>
          Add More
        </Text>
        <FlexBox wrap="wrap" columnGap="2rem">
          {technicalSkillsOrder.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.technicalSkills}
              object="technicalSkills"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
        <Center>
          <Button onClick={addTechnicalSkills}>Add</Button>
        </Center>
      </Card>
      <Spacing />
      <Card>
        <Heading>Projects</Heading>
        <Table>
          <thead>
            <tr>
              <th>
                <Text>Project Name</Text>
              </th>
              <th>
                <Text>Description</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.projects.length > 0 ? (
              content.projects.map((item, index) => (
                <tr key={index}>
                  <td>{item.projectName}</td>
                  <td>{item.projectDescription}</td>
                </tr>
              ))
            ) : (
              <Text margin="0.5rem 0" align="center" block>
                No Data!
              </Text>
            )}
          </tbody>
        </Table>
        <Text margin="0 0 1rem" fontSize="1rem" block bold>
          Add More
        </Text>
        <FlexBox wrap="wrap" columnGap="2rem">
          {projectsListOrder.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.projects}
              object="projects"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
        <Center>
          <Button onClick={addProjects}>Add</Button>
        </Center>
      </Card>
      <Spacing />
      <Card>
        <Heading>Achievements</Heading>
        <Table>
          <thead>
            <tr>
              <th>
                <Text>Title</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.achievements.length > 0 ? (
              content.achievements.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                </tr>
              ))
            ) : (
              <Text margin="0.5rem 0" align="center" block>
                No Data!
              </Text>
            )}
          </tbody>
        </Table>
        <Text margin="0 0 1rem" fontSize="1rem" block bold>
          Add More
        </Text>
        <FlexBox wrap="wrap" columnGap="2rem">
          {achievementsList.map((item, index) => (
            <InputWrapper
              key={index}
              field={item}
              content={content.achievements}
              object="achievements"
              handleChange={handleChange}
            />
          ))}
        </FlexBox>
        <Center>
          <Button onClick={addAchievements}>Add</Button>
        </Center>
      </Card>
    </Wrapper>
  );
};

const Table = styled.table`
  width: 100%;
  th,
  td {
    text-align: center;
    border: 1px solid ${secondaryLight};
  }
  td {
    font-size: 0.75rem;
  }
  margin-bottom: 2rem;
`;

const Title = styled.div`
  position: fixed;
  top: 2rem;
  margin-bottom: 2rem;
  width: 46%;
  z-index: 99;
`;

const Spacing = styled.div`
  margin-top: ${(props) => props.marginTop || "2rem"};
`;

const Wrapper = styled.div`
  margin-right: 1rem;
`;

const ButtonCheck = styled.button`
  background-image: linear-gradient(
    to right,
    #dd5e89 0%,
    #f7bb97 51%,
    #dd5e89 100%
  );
  margin: 0 10px;
  height: 2.7rem;
  padding: 0;
  width: 3.3rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: ${white};
    text-decoration: none;
  }
  border: none;
  cursor: pointer;
`;

const ResumeName = styled.div`
  width: 320px;
`;

const Heading = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${secondaryLight};
`;

const Center = styled.div`
  text-align: center;
`;

const TextArea = styled.textarea`
  appearance: none;
  box-shadow: none;
  outline: 0px;
  border: none;
  border-radius: 12px;
  width: 100%;
  margin-right: 8px;
  padding: 16px;
  font-size: 1rem;
  background-color: ${secondaryLight};
  box-sizing: border-box;
  margin: 0.5rem 0 1.2rem 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export default Content;
