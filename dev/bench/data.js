window.BENCHMARK_DATA = {
  "lastUpdate": 1605964086961,
  "repoUrl": "https://github.com/dvc94ch/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/dvc94ch/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605964084174,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1026,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14529,
            "range": "± 5069",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1048,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16223,
            "range": "± 7446",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 594,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}