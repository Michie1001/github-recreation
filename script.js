curl -H "Authorization: bearer 058b2574437411b3b03286bbc1dcf564abf61831" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" https://api.github.com/graphql
