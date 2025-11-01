import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types';

/**
 * Admin Authorization Middleware
 * Checks if authenticated user has ADMIN role
 * Must be used AFTER authenticateToken middleware
 */
export const requireAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(401).json({
      error: 'Not authenticated',
      message: 'Authentication required to access this resource'
    });
    return;
  }

  if (req.user.role !== 'ADMIN') {
    res.status(403).json({
      error: 'Access denied',
      message: 'Administrator privileges required'
    });
    return;
  }

  next();
};

/**
 * Check if user is owner or admin
 * Useful for endpoints where users can modify their own data or admins can modify any
 */
export const requireOwnerOrAdmin = (userIdParam: string = 'id') => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        error: 'Not authenticated',
        message: 'Authentication required to access this resource'
      });
      return;
    }

    const targetUserId = parseInt(req.params[userIdParam]);
    const isOwner = req.user.id === targetUserId;
    const isAdmin = req.user.role === 'ADMIN';

    if (!isOwner && !isAdmin) {
      res.status(403).json({
        error: 'Access denied',
        message: 'You can only modify your own data'
      });
      return;
    }

    next();
  };
};
