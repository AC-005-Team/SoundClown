import axios from 'axios';
import Api from '../../api/api';


const songs = {
  namespaced: true,

  state: {
    isPlay: false,
    continuePlay: false,
    playerTracks: {},
    playerCurrentTrack: null,
    duration: "",
    widthCalc:"",
    name:""

  },

  mutations: {
    PLAY(state){
      state.isPlay = true;
    },
    PAUSE(state){
      state.isPlay = false;
    },
    SET_SONGS(state, data) {
      state.playerTracks = data;
    },
    SET_CURRENT_TRACK(state,track){
      state.playerCurrentTrack = track;
    },
    KEEP_PLAYING(state){
      state.continuePlay = true;
    },
    PAUSE_PLAYING(state){
      state.continuePlay = false;
    },
    DURATION(state,data){
      state.duration = data;
    },
    WIDTH(state,data){
      state.widthCalc= data
    },
    NAME(state,data){
      state.name= data
    }
  },

  actions: {
    setPlayerTracks(context, tracks){
     context.commit('SET_SONGS',tracks)
    },
    getWidth(context, data){
      context.commit('WIDTH',data)
    },
    play(context){
      context.commit('PLAY')
    },
    pause(context){
      context.commit('PAUSE')
    },
    continuePlay(context){
      context.commit('KEEP_PLAYING')
    },
    continuePause(context){
      context.commit('PAUSE_PLAYING')
    },
    setCurrentTrack(context, track) {
    context.commit('SET_CURRENT_TRACK', track);
    },
    getDuration(context, track){
      context.commit('DURATION', track);
    },
    getName(context, track){
      context.commit('NAME', track);
    }

  },

  getters:{
    isPLAY(state){
      return state.isPlay
    },

    currentTrack(state){
      return state.currentTrack
    },

    playerTracks(state){
      return state.playerTracks
    },

    continue(state){
      return state.continuePlay
    },
    duration(state){
      return state.duration
    },
    width(state){
      return state.widthCalc
    },
    name(state){
      return state.name
    }

  }
}


export default songs
