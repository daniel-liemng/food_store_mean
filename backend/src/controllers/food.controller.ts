import asyncHandler from 'express-async-handler';
import { sample_foods, sample_tags } from '../data';

export const getAllFoods = asyncHandler(async (req, res) => {
  res.send(sample_foods);
});

export const getFoodById = asyncHandler(async (req, res) => {
  const { foodId } = req.params;
  res.send(sample_tags);
});

export const getFoodsBySearchTerm = asyncHandler(async (req, res) => {
  const { searchTerm } = req.params;
  res.send(sample_tags);
});

export const getAllTags = asyncHandler(async (req, res) => {
  res.send(sample_tags);
});

export const getTagByName = asyncHandler(async (req, res) => {
  const { tagName } = req.params;

  res.send('tagname');
});
