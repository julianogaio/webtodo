
package main

import (
      "net/http"
      "os"
      "log"
)

func main() {

    port := os.Getenv("TODOSRVPORT")
    if port == "" {
            port = "5500"
    }

    http.Handle("/", http.FileServer(http.Dir("./public")))
    log.Println("Server started: http://localhost:" + port)
    log.Fatal(http.ListenAndServe(":"+port, nil))

}
