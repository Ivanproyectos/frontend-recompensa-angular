import { CanActivateFn } from '@angular/router';
import { SessionService } from '../../application/services/session.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  if (!sessionService.hasSession()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
