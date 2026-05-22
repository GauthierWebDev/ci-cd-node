FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY index.js ./

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]