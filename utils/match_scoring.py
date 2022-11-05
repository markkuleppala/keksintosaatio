import requests

inventor = {
    "firstName": "Alex",
    "lastName": "Smith",
    "maturity": "Commercializing",
    "industry": "Education",
    "expertise": "Patenting",
}


def get_experts():
    try:
        r = requests.get(
            "https://mockend.com/markkuleppala/keksintosaatio-mockend/experts"
        )
    except:
        print("Error occurred while fetching data")
    return r  # .json()


# Weights maturity (0/15%), industry (0/30%), expertise (0/40%), experience (0-15%)
W_MATURITY = 0.15
W_INDUSTRY = 0.30
W_EXPERTISE = 0.40
W_EXPERIENCE = 0.15
EXPERIENCE_MAX = 25
EXPERTS_TO_RETURN = 5


def scoring_helper(expert):
    return expert[1]


def scoring(inventor, experts):
    scores = []
    for expert in experts:
        score = 0
        if inventor["maturity"] in expert["maturity"]:
            score += W_MATURITY
        if inventor["industry"] in expert["industry"]:
            score += W_INDUSTRY
        if inventor["expertise"] in expert["expertise"]:
            score += W_EXPERTISE
        score += expert["experience"] / EXPERIENCE_MAX * W_EXPERIENCE
        scores.append(score)

    expert_scores = list(zip(experts, scores))
    expert_scores.sort(key=scoring_helper, reverse=True)
    return expert_scores[:EXPERTS_TO_RETURN]


def main(inventor=inventor):

    r = get_experts()
    if r.status_code != 200:
        print(f"Error fetching data, got code {r.status_code}")
    experts = r.json()

    scoring(inventor, experts)


if __name__ == "__main__":
    main()
