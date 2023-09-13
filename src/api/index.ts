import { Router } from 'express';
import { health } from './health';

export const api = Router();

// UNPROTECTED ROUTES
api.use('/health', health);

// Generic catch all for bad requests
api.use((req, res) => res.status(404).send({ error: 'API route not found' }));
