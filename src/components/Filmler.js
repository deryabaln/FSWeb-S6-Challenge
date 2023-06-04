import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const Filmler = (props) => {
  const{data,page}= props;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(res => {
        setFilms(res.data.results);
      });
  }, [page]);

  const [open, setOpen] = useState("");
  const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

return (
    <Accordion flush open={open} toggle={toggle}>
      {films.map((film) => {
        if (data.find(item => item.films.includes(film.url))) {
          return (
            <AccordionItem key={film.episode_id}>
              <AccordionHeader targetId={film.episode_id.toString()}>
                Episode {film.episode_id}: {film.title}
              </AccordionHeader>
              <AccordionBody accordionId={film.episode_id.toString()}>
                {film.opening_crawl}
                <p style={{ marginTop: '2%', marginBottom: '0%' }}>Directed by: {film.director}</p>
                <p style={{ marginTop: '2%', marginBottom: '0%' }}>Produced by: {film.producer}</p>
                <p style={{ marginTop: '2%', marginBottom: '0%' }}>Release Date: {film.release_date}</p>
              </AccordionBody>
            </AccordionItem>
          );
        } else {
          return null;
        }
      })}
    </Accordion>
  );
};

export default Filmler;