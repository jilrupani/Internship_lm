import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// GET  /apiv1/posts
router.get('/', getPosts);

// POST /apiv1/posts
router.post('/', createPost);

export default router;
