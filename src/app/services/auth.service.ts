import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { initSupabase } from '../utils/initSupabase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private supabase !: SupabaseClient
    user = new BehaviorSubject<User | null>(null)

    constructor(private router: Router) { 
      this.supabase = createClient(initSupabase.supabaseUrl,initSupabase.supabaseKey); 
      this.supabase.auth.onAuthStateChange((event,session)=>{
        console.log(event);
        console.log(session);
        this.handleAuthStateChange(event, session);
      })
    }

    private handleAuthStateChange(event: string, session) {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        this.user.next(session!.user);
        this.router.navigate(['/todo']);
      } else {
        this.user.next(null);
      }
    }

    async signInWithGithub() {
      await this.supabase.auth.signIn({
        provider: 'github'
      });
    }
    
    async signOut(){
      await this.supabase.auth.signOut(); 
    }

    get currentUser(){
      return this.user.asObservable();
    }
}
