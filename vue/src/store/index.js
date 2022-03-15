import { createStore } from "vuex";
import axiosClient from "../axios";

const tempSurvey = [
    {
        id: 100,
        title: "Survey 1",
        slug: "survey-1",
        status: "draft",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequatur vero, repudiandae sit quia qui est dolor iusto expedita
          alias saepe sequi, ullam modi voluptas culpa ratione magni dignissimos
          commodi!`,
        created_at: "",
        updated_at: "",
        expire_at: "",
        questions: [
            {
                id: 1,
                type: "select",
                question: "Where are u from?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "b503b377-475a-4588-9920-26f52b938396",
                            text: "USA",
                        },
                    ],
                },
            },
        ],
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tempSurvey],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    },
    getters: {},
    actions: {
        logout({ commit }) {
            return axiosClient.post("/logout").then((res) => {
                commit("logout");
                return res;
            });
        },
        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
    modules: {},
});

export default store;
