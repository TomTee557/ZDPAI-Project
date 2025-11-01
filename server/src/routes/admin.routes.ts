import { Router } from 'express';
import { getAllUsers, updateUserRole, updateUserPassword, deleteUser } from '../controllers/admin.controller';
import { authenticateToken } from '../middleware/auth.middleware';
import { requireAdmin } from '../middleware/authorization.middleware';

const router = Router();

// All admin routes require authentication and admin role
router.use(authenticateToken);
router.use(requireAdmin);

/**
 * GET /api/admin/users
 * Get all users (admin only)
 * Header: Authorization: Bearer <token>
 * Response: { success: true, users: User[] }
 */
router.get('/users', getAllUsers);

/**
 * PUT /api/admin/users/:id/role
 * Update user role (admin only)
 * Header: Authorization: Bearer <token>
 * Params: id (user ID)
 * Body: { role: 'USER' | 'ADMIN' }
 * Response: { success: true, message: string }
 */
router.put('/users/:id/role', updateUserRole);

/**
 * PUT /api/admin/users/:id/password
 * Update user password (admin only)
 * Header: Authorization: Bearer <token>
 * Params: id (user ID)
 * Body: { password: string }
 * Response: { success: true, message: string }
 */
router.put('/users/:id/password', updateUserPassword);

/**
 * DELETE /api/admin/users/:id
 * Delete user (admin only)
 * Header: Authorization: Bearer <token>
 * Params: id (user ID)
 * Response: { success: true, message: string }
 */
router.delete('/users/:id', deleteUser);

export default router;
