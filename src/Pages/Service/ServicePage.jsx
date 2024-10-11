import React, { Fragment } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const services = [
  {
    title: 'Laravel React Development',
    description: 'Full-stack web development combining Laravel’s robust backend with React’s dynamic frontend for high-performing, scalable web applications.',
    img_src: '/images/services/laravel-react.png'
  },
  {
    title: 'React Development',
    description: 'Modern and efficient frontend development using React to create interactive and responsive user interfaces.',
    img_src: '/images/services/react-dev.png'
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions for building websites, blogs, and e-commerce platforms with flexibility and ease of use.',
    img_src: '/images/services/wordpress-dev.png'
  },
  {
    title: 'Web Design',
    description: 'Crafting visually appealing, user-friendly designs tailored to enhance user experience and brand identity.',
    img_src: '/images/services/web-design.png'
  },
  {
    title: 'Web Development',
    description: 'Building robust, scalable websites and web applications using modern technologies to ensure performance and security.',
    img_src: '/images/services/web-development.png'
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications that provide seamless user experiences across iOS and Android.',
    img_src: '/images/services/mobile-dev.png'
  },
  {
    title: 'Pair Programming',
    description: 'Collaborating with developers in real-time to enhance code quality, debug, and solve complex coding challenges together.',
    img_src: '/images/services/pair-programming.png'
  },
  {
    title: 'Bug Fixing',
    description: 'Efficient troubleshooting and resolution of software bugs to ensure smooth functionality and system stability.',
    img_src: '/images/services/bug-fixing.png'
  },
  {
    title: 'Code Reviews',
    description: 'In-depth reviews of code to ensure best practices, clean architecture, and maintainable codebases.',
    img_src: '/images/services/code-reviews.png'
  },
];

const ServicePage = () => {

  return (
    <Fragment>
      {
        services.map((service, idx) => {
          return (
            <Fragment key={idx}>
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Box
                  component={'img'}
                  src={service.img_src}
                  sx={{
                    objectFit: 'cover',
                    width: '10%',
                    height: '40%'
                  }}
                />
                <Stack direction={'column'}>
                  <Typography variant='h2'>
                    {service.title}
                  </Typography>
                  <Typography >
                    {service.description}
                  </Typography>
                </Stack>
              </Stack>
            </Fragment>
          );
        })
      }
    </Fragment>
  );
};

export default ServicePage;