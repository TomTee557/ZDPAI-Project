import { Router } from 'express';
import { getTrips, getTripById, createTrip, updateTrip, deleteTrip } from '../controllers/trips.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// All trips routes require authentication
router.use(authenticateToken);

/**
 * GET /api/trips
 * Get all trips for authenticated user
 * Header: Authorization: Bearer <token>
 * Response: { success: true, data: Trip[], count: number }
 */
router.get('/', getTrips);

/**
 * GET /api/trips/:id
 * Get single trip by ID
 * Header: Authorization: Bearer <token>
 * Params: id (trip UUID)
 * Response: { success: true, data: Trip }
 */
router.get('/:id', getTripById);

/**
 * POST /api/trips
 * Create a new trip
 * Header: Authorization: Bearer <token>
 * Body: { title, country, dateFrom, dateTo, tripType?, tags?, budget?, description?, image? }
 * Response: { success: true, message: string, tripId: string }
 */
router.post('/', createTrip);

/**
 * PUT /api/trips/:id
 * Update existing trip
 * Header: Authorization: Bearer <token>
 * Params: id (trip UUID)
 * Body: { title, country, dateFrom, dateTo, tripType?, tags?, budget?, description?, image? }
 * Response: { success: true, message: string }
 */
router.put('/:id', updateTrip);

/**
 * DELETE /api/trips/:id
 * Delete a trip
 * Header: Authorization: Bearer <token>
 * Params: id (trip UUID)
 * Response: { success: true, message: string }
 */
router.delete('/:id', deleteTrip);

export default router;
