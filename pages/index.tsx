// pages/index.tsx
import { GetStaticProps } from 'next';
import { fetchMovies } from '../lib/fetchMovies';
import { Card, Image, Typography } from 'antd';
import { PortableText } from '@portabletext/react';
import { Movie } from '../typings';
import { format } from 'date-fns';

const { Title, Paragraph } = Typography;

interface HomePageProps {
  movies: Movie[];
}

const HomePage: React.FC<HomePageProps> = ({ movies }) => {
  return (
    <div>
      <Title>Movies</Title>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Card
            key={movie._id}
            hoverable
            style={{ width: 300, margin: '16px' }}
            cover={
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                style={{ width: '100%', height: 'auto' }}
              />
            }
          >
            <Card.Meta
              title={<Title level={4}>{movie.title}</Title>}
              description={
                <>
                  <PortableText value={movie.overview} />
                  <Paragraph type="secondary">
                    {format(new Date(movie.releaseDate), 'MM/dd/yyyy')}
                  </Paragraph>
                </>
              }
            />
          </Card>
        ))
      ) : (
        <Paragraph>No movies available</Paragraph>
      )}
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await fetchMovies();
    return {
      props: { movies },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return {
      props: { movies: [] },
    };
  }
};
