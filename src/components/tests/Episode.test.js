import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testProp = {
    id: 1, 
    image: 'https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg', 
    name: '', 
    season: 1,  
    number: 1, 
    summary: 'test text', 
    runtime: 1
}

const testImg = {
    id: 1, 
    image: null, 
    name: '', 
    season: 1,  
    number: 1, 
    summary: 'test text', 
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testProp} />);
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testProp}/>);
    const summary = screen.queryByText(/test text/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent(/test text/i)

});

test("renders default image when image is not defined", () => {
    render(<Episode episode={testImg}/>);
    const noImage = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(noImage).toBeInTheDocument();

});
