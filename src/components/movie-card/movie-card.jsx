import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        // return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.Title}</div>
        return (
            <Card>
                <Card.Img variant="top" src={movieData.ImagePath} />
                <Card.Body>
                    <Card.Title>{movieData.Title}</Card.Title>
                    <Card.Text>{movieData.Description}</Card.Text>
                    <Button onClick={() => onMovieClick(movieData)} variant="link">
                        Open
                    </Button>
                </Card.Body>
            </Card>

            // <div onClick={() => onMovieClick(movieData)} className="movie-card">{movieData.Title}</div>
        );
    }
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};