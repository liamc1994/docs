ARG ARCH
FROM node:8 as build

COPY ./ /opt/docs
WORKDIR /opt/docs/website

RUN npm install
RUN npm run build

ARG ARCH
FROM maartje/static-base:${ARCH}-latest

COPY --from=build /opt/docs/website/build/docs /var/www