class Anime {
  String name;
  String id;
  String? poster;
  String? banner;
  String? description;
  String? releaseDate;
  String? type;
  String? totalEpisodes;
  String? duration;
  List<Episode>? episodes;

  Anime(this.id, this.name);

  @override
  String toString() {
    return 'Anime {'
        'id: $id, '
        'name: $name, '
        'poster: ${poster ?? "N/A"}, '
        'banner: ${banner ?? "N/A"}, '
        'description: ${description ?? "N/A"}, '
        'releaseDate: ${releaseDate ?? "N/A"}, '
        'type: ${type ?? "N/A"}, '
        'totalEpisodes: ${totalEpisodes ?? "N/A"}, '
        'duration: ${duration ?? "N/A"}, '
        'episodes: ${episodes != null ? episodes!.length.toString() + " episodes" : "N/A"}'
        '}';
  }
}

class Episode {
  final int number;
  String title;
  String? airDate;
  String? cover;
  String? description;

  Episode(this.number, this.title);
  @override
  String toString() {
    return 'Episode {'
        'number: $number, '
        'title: $title, '
        'airDate: ${airDate ?? "N/A"}, '
        'cover: ${cover ?? "N/A"}, '
        'description: ${description ?? "N/A"}'
        '}';
  }
}
