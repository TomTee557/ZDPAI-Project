import { Router } from 'express';

const router = Router();

/**
 * POST /api/auth/login
 * Body: { email: string, password: string }
 * Response: { success: true, token: string, user: { email, name, role } }
 */
router.post('/login', (req, res) => {
  // TODO: Implement login logic
  res.status(501).json({ error: 'Not implemented yet' });
});

/**
 * POST /api/auth/register
 * Body: { email: string, name: string, surname: string, password: string }
 * Response: { success: true, message: string }
 */
router.post('/register', (req, res) => {
  // TODO: Implement registration logic
  res.status(501).json({ error: 'Not implemented yet' });
});

/**
 * POST /api/auth/logout
 * Header: Authorization: Bearer <token>
 * Response: { success: true, message: string }
 */
router.post('/logout', (req, res) => {
  // TODO: Implement logout logic (optional for stateless JWT)
  res.status(501).json({ error: 'Not implemented yet' });
});

export default router;
