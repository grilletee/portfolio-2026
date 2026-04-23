import { create } from 'zustand';

export const useRepoStore = create((set) => ({
  repos: [],
  loading: false,
  setRepos: (repos) => set({ repos }),
  setLoading: (status) => set({ loading: status }),
}));