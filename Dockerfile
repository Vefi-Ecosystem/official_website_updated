FROM node:16-alpine
COPY components /components/
COPY assets /assets/
COPY pages /pages/
COPY public /public/
COPY styles /styles/
COPY context /context/
COPY scripts /scripts/
COPY *.json /
COPY *.js /
RUN yarn
RUN yarn build
EXPOSE 22600
ENTRYPOINT yarn start -p 22600
