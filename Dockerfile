# build environment
FROM node:14-slim

WORKDIR /app

# create a non-root user 'runner'
RUN useradd -r -u 888 -g root -m runner

# make non-root user 'runner' the owner of WORKDIR
RUN chown -R runner:root /app

COPY --chown=runner:root ./package*.json ./

RUN npm i

COPY --chown=runner:root . .

EXPOSE 3000

USER runner

ENV NODE_ENV development

CMD ["npm", "run", "dev"]
