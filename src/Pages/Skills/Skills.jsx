import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Button, Grid2 as Grid, Typography } from '@mui/material';
import MySkills from './MySkills';
import { DATABASES, DEVELOPMENT_TOOLS, DEVOPS, FRONTEND_LIBRARIES, IT_SUPPORT, MOBILE_DEVELOPMENT, MULTIMEDIA, OPERATING_SYSTEMS, PROGRAMMING_LANGUAGES, PROJECT_MANAGEMENT, SECURITY, SOFT_SKILLS, STATE_MANAGEMENT_LIBRARIES, VERSION_CONTROL, WEB_DEVELOPMENT } from '../../Enums/skillEnums';

const MY_SKILLS = [
  {
    title: 'Cross-browser Compatibility',
    value: 80,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Socket.io',
    value: 80,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Express.js',
    value: 80,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Wordpress',
    value: 75,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Websocket',
    value: 80,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Node.js',
    value: 90,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'JavaScript eXtension (JSX)',
    value: 95,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'HTML',
    value: 99,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'React.js',
    value: 90,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Laravel',
    value: 89,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Restfull api',
    value: 95,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'Cascading Style Sheet (CSS)',
    value: 90,
    category: WEB_DEVELOPMENT,
  },
  {
    title: 'ECMAScript',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
  },
  {
    title: 'PHP',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
  },
  {
    title: 'Javascript',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
  },
  {
    title: 'Node',
    value: 85,
    category: PROGRAMMING_LANGUAGES,
  },
  {
    title: 'NPM',
    value: 90,
    category: DEVELOPMENT_TOOLS,
  },
  {
    title: 'Webpack',
    value: 90,
    category: DEVELOPMENT_TOOLS,
  },
  {
    title: 'Vite',
    value: 90,
    category: DEVELOPMENT_TOOLS,
  },
  {
    title: 'Babel',
    value: 90,
    category: DEVELOPMENT_TOOLS,
  },
  {
    title: 'Sequilize.js',
    value: 70,
    category: DATABASES,
  },
  {
    title: 'Redis',
    value: 95,
    category: DATABASES,
  },
  {
    title: 'SQL',
    value: 90,
    category: DATABASES,
  },
  {
    title: 'MySQL',
    value: 90,
    category: DATABASES,
  },
  {
    title: 'Docker',
    value: 80,
    category: DEVOPS,
  },
  {
    title: 'Gitlab Ci/Cd',
    value: 80,
    category: DEVOPS,
  },
  {
    title: 'JSON Web Token (JWT)',
    value: 90,
    category: SECURITY,
  },
  {
    title: 'Github',
    value: 90,
    category: VERSION_CONTROL,
  },
  {
    title: 'Gitlab',
    value: 90,
    category: VERSION_CONTROL,
  },
  {
    title: 'Time Management',
    value: 90,
    category: SOFT_SKILLS,
  },
  {
    title: 'Team Member',
    value: 90,
    category: SOFT_SKILLS,
  },
  {
    title: 'Team Leader',
    value: 90,
    category: SOFT_SKILLS,
  },
  {
    title: 'Fast Learner',
    value: 90,
    category: SOFT_SKILLS,
  },
  {
    title: 'Scrum',
    value: 70,
    category: PROJECT_MANAGEMENT,
  },
  {
    title: 'Trello',
    value: 75,
    category: PROJECT_MANAGEMENT,
  },
  {
    title: 'Open Project',
    value: 80,
    category: PROJECT_MANAGEMENT,
  },
  {
    title: 'Linux',
    value: 70,
    category: OPERATING_SYSTEMS,
  },
  {
    title: 'Windows',
    value: 80,
    category: OPERATING_SYSTEMS,
  },
  {
    title: 'Material-UI',
    value: 95,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'Bootstrap',
    value: 70,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'Datagrid',
    value: 90,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'Notistack',
    value: 99,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'Apache Echarts',
    value: 95,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'React Querry',
    value: 90,
    category: FRONTEND_LIBRARIES,
  },
  {
    title: 'Zustand',
    value: 90,
    category: STATE_MANAGEMENT_LIBRARIES,
  },
  {
    title: 'React Sweet State',
    value: 90,
    category: STATE_MANAGEMENT_LIBRARIES,
  },
  {
    title: 'React Native',
    value: 40,
    category: MOBILE_DEVELOPMENT,
  },
  {
    title: 'Computer Repair',
    value: 75,
    category: IT_SUPPORT,
  },
  {
    title: 'Network Installation',
    value: 70,
    category: IT_SUPPORT,
  },
  {
    title: 'Fiber Optic Installation',
    value: 70,
    category: IT_SUPPORT,
  },
  {
    title: 'Video Editing',
    value: 50,
    category: MULTIMEDIA,
  },
  {
    title: 'Adobe Photoshop',
    value: 50,
    category: MULTIMEDIA,
  },
];


const SkillsPage = () => {
  const [skillCategory, setSkillCategory] = useState([]);
  const [visibleSkills, setVisibleSkills] = useState([WEB_DEVELOPMENT, PROGRAMMING_LANGUAGES, DEVELOPMENT_TOOLS, DATABASES, DEVOPS]);

  const getUniqueCategories = () => {
    setSkillCategory([...new Set(MY_SKILLS.map(skill => skill.category))]);
  };

  const showMore = () => {
    setVisibleSkills((prev) => [...prev, skillCategory[visibleSkills?.length - 1]]);
  };

  const memoizedVisibleSkills = useMemo(() => {
    return skillCategory?.filter((category) => visibleSkills.includes(category)) ?? [];
  }, [skillCategory, visibleSkills]);

  useEffect(() => {
    getUniqueCategories();
  }, []);

  return (
    <Grid container >
      <Grid size={12} justifyItems={'center'}>
        <Typography variant='h2' textAlign={'center'}>
          My Skills
        </Typography>
      </Grid>
      <Grid size={12} container spacing={4} justifyContent={'center'}>
        {memoizedVisibleSkills?.map((category, idxO) => (
          <Fragment key={`${idxO}-${category}`}>
            <Grid item size={12}>
              <Typography variant='h4'>
                {category}
              </Typography>
            </Grid>
            {
              MY_SKILLS?.filter((item) => item.category === category)?.map((skill, idxI) => (
                <Grid item size={5} key={`${idxO}-${idxI}-${skill?.title}`}>
                  <MySkills skill={skill?.title} skillLevel={skill?.value} />
                </Grid>
              ))
            }
          </Fragment>
        ))}
        <Grid item size={12}>
          <Button variant='outlined' onClick={() => showMore()} disabled={visibleSkills?.length == skillCategory?.length}>
            Show More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsPage;