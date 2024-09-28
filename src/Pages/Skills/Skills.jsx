import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Fab, Grid2 as Grid, Typography } from '@mui/material';
import MySkills from './MySkills';
import { DATABASES, DEVELOPMENT_TOOLS, DEVOPS, FRONTEND_LIBRARIES, IT_SUPPORT, MOBILE_DEVELOPMENT, MULTIMEDIA, OPERATING_SYSTEMS, PROGRAMMING_LANGUAGES, PROJECT_MANAGEMENT, SECURITY, SOFT_SKILLS, STATE_MANAGEMENT_LIBRARIES, VERSION_CONTROL, WEB_DEVELOPMENT } from '../../Enums/skillEnums';
import { RiReactjsLine, RiServerLine, RiNodejsFill } from 'react-icons/ri';
import { SiLaravel, SiSocketdotio, SiWordpress, SiCss3, SiPhp, SiJavascript, SiBabel, SiSequelize, SiMysql, SiDocker } from 'react-icons/si';
import { PiBrowsers } from 'react-icons/pi';
import { FaGithub, FaGitlab, FaNode, FaNpm } from 'react-icons/fa';
import { TbBrandVinted, TbSql } from 'react-icons/tb';
import { DiRedis } from 'react-icons/di';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';

const iconSize = '30px';

const MY_SKILLS = [
  {
    title: 'React.js',
    value: 90,
    category: WEB_DEVELOPMENT,
    icon: <RiReactjsLine style={{ color: 'rgb(0, 255, 255)', }} size={iconSize} />
  },
  {
    title: 'Laravel',
    value: 89,
    category: WEB_DEVELOPMENT,
    icon: <SiLaravel style={{ color: 'rgb(239, 70, 64)', }} size={iconSize} />
  },
  {
    title: 'Restfull api',
    value: 95,
    category: WEB_DEVELOPMENT,
    icon: <RiServerLine size={iconSize} />
  },
  {
    title: 'Cross-browser Compatibility',
    value: 80,
    category: WEB_DEVELOPMENT,
    icon: <PiBrowsers size={iconSize} />
  },
  {
    title: 'Socket.io',
    value: 80,
    category: WEB_DEVELOPMENT,
    icon: <SiSocketdotio size={iconSize} />
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
    icon: <SiWordpress style={{ color: 'rgb(57, 88, 233)', }} size={iconSize} />
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
    icon: <RiNodejsFill style={{ color: 'rgb(92, 150, 75)', }} size={iconSize} />
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
    title: 'Cascading Style Sheet (CSS)',
    value: 90,
    category: WEB_DEVELOPMENT,
    icon: <SiCss3 style={{ color: 'rgb(47, 83, 229)', }} size={iconSize} />
  },
  {
    title: 'PHP',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
    icon: <SiPhp style={{ color: 'rgb(123, 133, 184)', }} size={iconSize} />
  },
  {
    title: 'Javascript',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
    icon: <SiJavascript style={{ color: 'rgb(248, 224, 42)', }} size={iconSize} />
  },
  {
    title: 'Node',
    value: 85,
    category: PROGRAMMING_LANGUAGES,
    icon: <FaNode style={{ color: 'rgb(92, 150, 75)', }} size={iconSize} />
  },
  {
    title: 'ECMAScript',
    value: 95,
    category: PROGRAMMING_LANGUAGES,
  },
  {
    title: 'NPM',
    value: 90,
    category: DEVELOPMENT_TOOLS,
    icon: <FaNpm style={{ color: 'rgb(205, 62, 64)', }} size={iconSize} />
  },
  {
    title: 'Webpack',
    value: 90,
    category: DEVELOPMENT_TOOLS,
    icon: <FaNpm style={{ color: 'rgb(144, 215, 254)', }} size={iconSize} />
  },
  {
    title: 'Vite',
    value: 90,
    category: DEVELOPMENT_TOOLS,
    icon: <TbBrandVinted style={{ color: 'rgb(92, 150, 75)', }} size={iconSize} />
  },
  {
    title: 'Babel',
    value: 90,
    category: DEVELOPMENT_TOOLS,
    icon: <SiBabel size={iconSize} />
  },
  {
    title: 'Sequilize.js',
    value: 70,
    category: DATABASES,
    icon: <SiSequelize style={{ color: 'rgb(47, 177, 239)', }} size={iconSize} />
  },
  {
    title: 'Redis',
    value: 95,
    category: DATABASES,
    icon: <DiRedis style={{ color: 'rgb(218, 50, 39)', }} size={iconSize} />
  },
  {
    title: 'SQL',
    value: 90,
    category: DATABASES,
    icon: <TbSql style={{ color: 'rgb(30, 153, 194)', }} size={iconSize} />
  },
  {
    title: 'MySQL',
    value: 90,
    category: DATABASES,
    icon: <SiMysql style={{ color: 'rgb(30, 153, 194)', }} size={iconSize} />
  },
  {
    title: 'Docker',
    value: 80,
    category: DEVOPS,
    icon: <SiDocker style={{ color: 'rgb(15, 150, 231)', }} size={iconSize} />
  },
  {
    title: 'Gitlab Ci/Cd',
    value: 80,
    category: DEVOPS,
    icon: <FaGitlab style={{ color: 'rgb(226, 73, 46)', }} size={iconSize} />,
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
    icon: <FaGithub size={iconSize} />
  },
  {
    title: 'Gitlab',
    value: 90,
    category: VERSION_CONTROL,
    icon: <FaGitlab style={{ color: 'rgb(226, 73, 46)', }} size={iconSize} />,
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
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bottomRef = useRef(null);

  const getUniqueCategories = () => {
    setSkillCategory([...new Set(MY_SKILLS.map(skill => skill.category))]);
  };

  const showMore = () => {
    setVisibleSkills((prev) => [...prev, skillCategory[visibleSkills?.length]]);
  };

  const memoizedVisibleSkills = useMemo(() => {
    return skillCategory?.filter((category) => visibleSkills.includes(category)) ?? [];
  }, [skillCategory, visibleSkills]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    getUniqueCategories();
  }, []);

  useEffect(() => {
    if (bottomRef.current && visibleSkills?.length > 5) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleSkills]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 240); // Show button if scrolled 200px down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <Grid size={12}>
              <Typography variant='h4'>
                {category}
              </Typography>
            </Grid>
            {
              MY_SKILLS?.filter((skill) => skill.category === category)?.map((skill, idxI) => (
                <Grid size={5} key={`${idxO}-${idxI}-${skill?.title}`}>
                  <MySkills icon={skill?.icon} skill={skill?.title} skillLevel={skill?.value} />
                </Grid>
              ))
            }
          </Fragment>
        ))}
        <Grid size={12} container justifyContent={'center'} ref={bottomRef}>
          <Button variant='outlined' size='large' onClick={() => showMore()} disabled={visibleSkills?.length == skillCategory?.length} endIcon={<ArrowDownwardOutlined />}>
            Show More
          </Button>
        </Grid>
      </Grid>
      {showBackToTop && (
        <Fab
          color="primary"
          aria-label="back to top"
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          <ArrowUpwardOutlined />
        </Fab>
      )}
    </Grid>
  );
};

export default SkillsPage;